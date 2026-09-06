"use client";
import { FieldValues, useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Imię i nazwisko
          </label>

          <input
            {...register("name", {
              required: "Podaj imię i nazwisko",
            })}
            id="name"
            type="text"
            placeholder="Jan Kowalski"
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          {errors.name && (
            <p className="text-red-500">{`${errors.name.message}`}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            E-mail
          </label>

          <input
            {...register("email", {
              required: "podaj email",
            })}
            id="email"
            type="email"
            placeholder="jan.kowalski@gmail.com"
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="phoneNumber"
            className="text-sm font-medium text-foreground"
          >
            Telefon
          </label>

          <input
            {...register("phoneNumber")}
            id="phoneNumber"
            type="tel"
            placeholder="660550440"
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-foreground"
          >
            Temat
          </label>

          <input
            {...register("subject", { required: "podaj temat wiadomości" })}
            id="subject"
            type="text"
            placeholder="Temat wiadomości"
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Wiadomość
          </label>

          <textarea
            {...register("message", {
              required: "Wiadomość jest pusta",
              minLength: {
                value: 20,
                message: "Wiadomość powinna zawierać conajmniej 20 znaków!",
              },
            })}
            id="message"
            placeholder="Jestem zainteresowany/a kupnem mieszkania..."
            className="min-h-32 rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <button
          type="submit"
          className="bg-accent text-black"
          disabled={isSubmitting}
        >
          {isSubmitting ? "wysyła..." : "wyślij"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
