import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ReportModal = ({ reportModal, setReportModal }) => {
  const handleReport = (e) => {
    e.preventDefault();
    console.log(e.target.report.value)
    const report = e.target.report.value
    const reportItem = {
        text: report
    }
    fetch('http://localhost:4000/report',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(reportItem)
    })
.then(res => res.json())
.then(data =>{
    console.log(data)
    if (data.acknowledged) {
        setReportModal(null)
        toast.success('Booking confirmed');
        // refetch();
    }
})
    
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="reportModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="reportModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Your opinion matters!
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">
                  If You Want Please Report This Item
                </span>
              </div>
              <div className="flex flex-col w-full">
                <form onSubmit={handleReport}>
                  <textarea
                    rows="3"
                    placeholder="Message..."
                    name="report"
                    className="p-4 rounded-md resize-none text-gray-900 w-full "
                  ></textarea>
                  <input
                    className=" btn mt-2 w-full"
                    type="submit"
                    value="Leave a Report "
                  />
                </form>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="text-sm text-gray-400"
              >
                Maybe later
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
