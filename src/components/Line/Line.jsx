
export default function Line({ theme = "white" }) {
  return (
    <div className="line-with-icon d-flex flex-wrap justify-content-center align-items-center my-3">
      <div className={`line me-3 bg-${theme}`}></div>
      <i className={`fa-solid fa-star text-${theme}`}></i>
      <div className={`line ms-3 bg-${theme}`}></div>
    </div>
  );
}
