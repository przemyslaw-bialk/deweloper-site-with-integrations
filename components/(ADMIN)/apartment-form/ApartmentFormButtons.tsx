import Button from "@/ui/Button";

const ApartmentFormButtons = () => {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
      <Button type="reset">Wyczyść</Button>
      <Button type="submit">Dodaj mieszkanie</Button>
    </div>
  );
};

export default ApartmentFormButtons;
