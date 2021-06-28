const ConnectedUsers = ({ users }) => {
  return (
    <div className="user-list">
      <h4>Usuarios Conectados</h4>
      {users.map((u, idx) => (
        <h6 key={idx}>{u}</h6>
      ))}
    </div>
  );
};

export default ConnectedUsers;
