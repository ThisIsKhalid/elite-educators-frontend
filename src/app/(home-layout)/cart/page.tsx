"use client"

import ServiceCard from "@/components/ui/ServiceCard";
import { useAppSelector } from "@/redux/hooks";


const CartPage = () => {
    const cartData = useAppSelector((state) => state.service.services);
    if(cartData.length >= 1){
        console.log(cartData)
    }
  return (
    <div>
      CartPage
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-10 px-5">
        {cartData?.map((service: any) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default CartPage