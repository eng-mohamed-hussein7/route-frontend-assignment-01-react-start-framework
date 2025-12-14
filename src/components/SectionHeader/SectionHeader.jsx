import Line from "../Line/Line";

export default function SectionHeader({ data }) {
  return (
    <>
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center text-blue pt-5">
        {data}
      </h2>
      <Line theme={"blue"} />
    </>
  );
}
