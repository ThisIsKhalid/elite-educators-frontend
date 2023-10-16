import { useState } from "react";
import toast from "react-hot-toast";
import { ImCancelCircle } from "react-icons/im";


const BookingModal = ({ service }:any) => {
    const {
      _id,
      subject,
      price,
      instructorId,
    } = service;

    const [selectedPrice, setSelectedPrice] = useState({});
    const [formData, setFormData] = useState({
      startDate: "",
      endDate: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handlePrice = (price: any) => {
      setSelectedPrice(price);
    };

    const handleConfirmPrice = () => {
      toast.success("Price Confirmed");
      console.log(selectedPrice);
      console.log(formData.startDate, formData.endDate);
    };

  return (
    <dialog id={_id} className="modal">
      <div className="modal-box">
        <div className="text-center">
          <h3 className="font-bold text-cOrange text-xl">{subject}</h3>
          <p className="mt-1 text-xs">{instructorId?.name}</p>
        </div>
        <div className="mt-2 text-center">
          <p className="text-cBlack font-bold font-mono uppercase text-xl mb-2">
            Offered Service(per week) :
          </p>
          <div className="flex flex-col items-center gap-2">
            {price?.map((priced: any) => (
              <button
                onClick={() => handlePrice(priced)}
                className={` text-lg btn hover:bg-cOrange ${
                  selectedPrice === priced
                    ? "bg-cOrange text-gray-100"
                    : "bg-cDeepBlue text-cyan-500"
                }`}
                key={priced._id}
              >
                Days : {priced.daysPerWeek} - Price : {priced.amountPerWeek}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div>
            <label className="label">Start Date</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="px-5 py-2 rounded-lg bg-cDeepBlue text-gray-100"
            />
          </div>
          <div>
            <label className="label">End Date </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="px-5 py-2 rounded-lg bg-cDeepBlue text-gray-100"
            />
          </div>
        </div>
        <div>
          <form method="dialog">
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleConfirmPrice}
                className="btn btn-sm btn-success"
                type="submit"
              >
                Confirm
              </button>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <ImCancelCircle />
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default BookingModal