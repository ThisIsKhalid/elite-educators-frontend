import Link from "next/link";


const BreadCrumb = () => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href='/home'>Home</Link>
        </li>
        <li>
            <Link href='/courses'>Courses</Link>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumb