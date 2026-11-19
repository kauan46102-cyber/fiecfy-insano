function UserAvatar({ imgUrl }) {
  return (
    <img
      src={imgUrl}
      alt="Foto de perfil do usuário"
      className="w-10 h-10 rounded-full object-cover"
    />
  );
}

export default UserAvatar;
