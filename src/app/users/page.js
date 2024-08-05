import Link from "next/link";
import "@/app/style.css";
async function getUsers() {
  const response = await fetch("http://localhost:3000/api/user");
  const data = await response.json();
  return data;
}

export default async function Page() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>Users List</h1>
      {users.map((item) => (
        <div key={item.id} className="user-item">
          <span><Link href={`/users/${item.id}`}>{item.name}</Link> </span>
          <span> <Link href={`/users/${item.id}/update`}> Edit  </Link> </span>
        </div>
      ))}
    </div>
  );
}
