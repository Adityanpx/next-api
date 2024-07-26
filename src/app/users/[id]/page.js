async function getUser(id) {
    const response = await fetch(`http://localhost:3000/api/user/${id}`);
    const data = await response.json();
    return data.result;
  }
  
  export default async function Page({ params }) {
    const user = await getUser(params.id);
    return (
      <div>
        <h1>User Detail</h1>
        {user ? (
          <div>
            <h3>Name: {user.name}</h3>
            <h3>ID: {user.id}</h3>
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.Email}</h3> {/* Display other user details as needed */}
          </div>
        ) : (
          <p>User not found</p>
        )}
      </div>
    );
  }
  