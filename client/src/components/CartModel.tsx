import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartTabs from "./CartTabs";

const CartModel = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side={"left"} className="w-[280px] ">
          <SheetHeader>
            <SheetTitle>ההזמנות שלך</SheetTitle>
            <SheetDescription>
              <CartTabs />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartModel;