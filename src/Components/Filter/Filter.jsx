import { useFormik } from "formik";
import { filter } from "../../Store/transactionsSlice.js";
import { useDispatch } from "react-redux";
export default function Filter() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      recipientName: "",
      amount: "",
    },

    onSubmit: function (values) {
      dispatch(filter(values));
    },
  });

  return (
    <>
      <form className="flex my-10" onSubmit={formik.handleSubmit}>
        <div className="ms-auto w-fit p-2 bg-white flex shadow-lg">
          <div>
            <input
              type="text"
              placeholder="Recipient Name"
              className="py-2 px-5 outline-0 border-r border-gray-400"
              value={formik.values.recipientName}
              onChange={formik.handleChange}
              id="recipientName"
              name="recipientName"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Amount"
              className="py-2 px-5 outline-0"
              value={formik.values.amount}
              onChange={formik.handleChange}
              id="amount"
              name="amount"
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-2 px-5 text-center bg-violet-900 text-white"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
}
