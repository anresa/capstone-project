import './ProfileCard.css';

export default function ProfileCard() {
  return (
    <>
      <img
        className="profile-picture"
        src="https://images.unsplash.com/photo-1507548335453-2264668e6243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80"
        alt="A picture of a woman looking at the ocean"
      />
      <h2 className="quote">Find the courage and the rest will come.</h2>
    </>
  );
}
