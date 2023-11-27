"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
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
import { useToast } from "~/components/ui/use-toast";
import { api } from "~/trpc/react";
import { I18nDict } from "~/types";

interface Props {
  dictionary: I18nDict;
  id: string;
}

export function CreateOrganizationDialog({ dictionary, id }: Props) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const createOrganization = api.organization.create.useMutation({
    onSuccess: () => {
      setName("");
      toast({
        description: dictionary.successToast,
      });
      setDialogOpen(false);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: dictionary.errorToast,
      });
    },
  });
  const submit = () => {
    createOrganization.mutate({ name: name, id: id });
  };

  return (
    <div className="mb-4">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <span className="text-lg font-semibold text-primary hover:cursor-pointer">
            {dictionary.title}
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{dictionary.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {dictionary.name}
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={submit}
              disabled={createOrganization.isLoading}
            >
              {createOrganization.isLoading
                ? dictionary.wait
                : dictionary.create}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <p className="mb-2 text-sm">{dictionary.description}</p>
    </div>
  );
}
