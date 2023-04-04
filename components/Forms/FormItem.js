import { Styles } from "@/utils/styles";
import React from "react";
import { MdDelete } from "react-icons/md";
const FormItem = ({ item, index, removeForm, inputChange }) => {
  return (
    <div className="my-4 relative w-full h-auto">
      <div className="grid grid-flow-row grid-cols-3 gap-4">
        <div className="w-full">
          <label className={Styles.formLable}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={item.fulName}
            className={Styles.formInput}
            onChange={(e) => inputChange(e, index)}
            placeholder="Full Name"
          />
        </div>
        <div className="w-full">
          <label className={Styles.formLable}>Passport Number</label>
          <input
            type="text"
            name="passportNumber"
            value={item.passportNumber}
            className={Styles.formInput}
            onChange={(e) => inputChange(e, index)}
            placeholder="Passport Number"
          />
        </div>
        <div className="w-full">
          <label className={Styles.formLable}>Country Name</label>
          <input
            type="text"
            name="countryName"
            value={item.countryName}
            className={Styles.formInput}
            onChange={(e) => inputChange(e, index)}
            placeholder="Country Name"
          />
        </div>
      </div>
      {index !== 0 ? (
        <div className="absolute text-4xl -right-10 top-6 text-red-700">
          <button onClick={(e) => removeForm(e, index)}>
            <MdDelete />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FormItem;
