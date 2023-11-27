"use client";

import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useToast } from "~/components/ui/use-toast";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";
import { I18nDict } from "~/types";

interface Props {
  dictionary: I18nDict;
  id: string;
}

export function CreateLocationDialog({ dictionary, id }: Props) {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [orgId, setOrgId] = useState("");
  const [locationName, setLocationName] = useState("");

  const organizations = api.organization.getByManager.useQuery({
    manageId: id,
  });
  const createLocation = api.location.create.useMutation({
    onSuccess: () => {
      setOrgName("");
      setOrgId("");
      setLocationName("");
      setOpen(false);
      setDialogOpen(false);
      toast({
        description: dictionary.successToast,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: dictionary.errorToast,
      });
    },
  });
  const submit = () => {
    createLocation.mutate({ name: locationName, organizationId: orgId });
  };

  function Content() {
    if (organizations.status === "loading") {
      return <span>{dictionary["organization-fetch-loading"]}</span>;
    }
    if (organizations.status === "error") {
      return <span>{dictionary["organization-fetch-error"]}</span>;
    }

    return (
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="orgName" className="text-right">
          {dictionary["organization-name"]}
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[300px] justify-between"
            >
              {orgName
                ? organizations.data.find((org) => org.id === orgId)?.name
                : dictionary["organization-select"]}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput
                placeholder={dictionary["organization-input-placeholder"]}
                className="h-9"
              />
              <CommandEmpty>
                {dictionary["organization-empty-placeholder"]}
              </CommandEmpty>
              <CommandGroup>
                {organizations.data.map((organization) => (
                  <CommandItem
                    key={organization.id}
                    value={organization.id}
                    onSelect={(currentValue) => {
                      setOrgId(currentValue === orgId ? "" : currentValue);
                      setOrgName(
                        organizations.data.find(
                          (org) => org.id === currentValue,
                        )!.name,
                      );
                      setOpen(false);
                    }}
                  >
                    {organization.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        orgName === organization.name
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <span
            className="text-lg font-semibold text-primary hover:cursor-pointer"
            onClick={() => organizations.refetch()}
          >
            {dictionary.title}
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{dictionary.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Content />
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="locationName" className="text-right">
                {dictionary["location-name"]}
              </Label>
              <Input
                id="locationName"
                className="w-[300px]"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={submit}
              disabled={createLocation.isLoading}
            >
              {createLocation.isLoading ? dictionary.wait : dictionary.create}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <p className="mb-2 text-sm">{dictionary.description}</p>
    </div>
  );
}
