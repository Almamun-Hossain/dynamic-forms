import FormItem from "@/components/Forms/FormItem";
import { Styles } from "@/utils/styles";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  let item = { fullName: "", passportNumber: "", countryName: "" };
  const [form, setForm] = useState([item]);

  //add more form
  const addMore = (e) => {
    e.preventDefault();
    setForm([...form, item]);
  };

  //rest form
  const resetForm = (e) => {
    e.preventDefault();
    setForm([item]);
  };

  //remove form
  const removeForm = (e, i) => {
    e.preventDefault();
    let filterForm = form.filter((item, index) => index !== i);
    setForm(filterForm);
  };

  // On input change
  const inputChange = (e, i) => {
    e.preventDefault();
    let data = [...form];
    data[i][e.target.name] = e.target.value;
    setForm(data);
  };

  //onsubmit form
  const onFormSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form));
  };

  return (
    <>
      <Head>
        <title>Dynamic Form </title>
        <meta name="description" content="Build Dynamic Form in NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <div className="p-5 text-center bg-sky-600">
        <h1 className="text-white text-4xl">Dynamic Form</h1>
      </div>
      <div className=" w-1/2 mx-auto px-16 py-10 shadow-xl my-10">
        <div className="flex gap-4">
          <button
            className={Styles.addButton}
            onClick={addMore}
          >
            Add More
          </button>
          <button className={Styles.resetButton} onClick={resetForm}>
            Reset Form
          </button>
        </div>

        <form onSubmit={onFormSubmit}>
          {form.map((item, index) => (
            <FormItem
              item={item}
              index={index}
              key={index}
              removeForm={removeForm}
              inputChange={inputChange}
            />
          ))}
          <div className="text-center mt-3">
            <button
              type="submit"
              className="bg-sky-600 px-6 py-2 text-white text-xl rounded-md"
            >
              Submit Data
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
