import { useItemStore } from "@/store/dataStore";
import { categoryOptions } from "@/types/datatypes";
import {
  Utensils,
  Car,
  Book,
  Lightbulb,
  Gamepad2,
  MoreHorizontal,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";



const iconMap: Record<string, React.ReactNode> = {
  Food: <Utensils className="h-4 w-4" />,
  Transport: <Car className="h-4 w-4" />,
  Education: <Book className="h-4 w-4" />,
  Utilities: <Lightbulb className="h-4 w-4" />,
  Entertainment: <Gamepad2 className="h-4 w-4" />,
  Other: <MoreHorizontal className="h-4 w-4" />,
};

export function CategoryCards() {

  const expenses = useItemStore((state) => state.expenses);

  return (

    <div className="grid gap-2 md:grid-cols-6">
      {categoryOptions.map((category) => {
        const categoryExpenses = expenses.filter(
          (expense) => expense.category === category.value,
        );
        const categoryTotal = categoryExpenses.reduce(
          (acc, item) => acc + item.amount,
          0,
        );

        return (
          // Use Card component to display values by category
          <Card size="sm" className="mx-auto w-full max-w-xs">
            <div>
              <CardHeader>
                {/* {iconMap} */}
                {category.label}
              </CardHeader>

              <CardTitle className="m-2 ml-3 text-5xl font-bold tracking-tight">
                ฿{categoryTotal.toFixed(2)}
              </CardTitle>

            </div>
          </Card>
        );
      })}
    </div>
  );
}
