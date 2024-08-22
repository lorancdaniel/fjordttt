"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Component Imports
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Proszę podać prawidłowy adres e-mail.",
  }),
});

export function CTAForm() {
  // 1. Definiowanie formularza.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Definiowanie obsługi wysyłania.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Tutaj można dodać logikę obsługi wysłanego formularza.
    // ✅ To będzie typowo bezpieczne i zwalidowane.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  className="md:w-96"
                  placeholder="twoj@email.pl"
                  {...field}
                />
              </FormControl>
              <FormDescription>Gwarantujemy brak spamu!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Zapisz się</Button>
      </form>
    </Form>
  );
}
