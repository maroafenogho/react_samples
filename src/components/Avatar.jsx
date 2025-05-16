export default function Avatar({ user }) {
    return (
        <img src={user.avatar} alt={user.alt} style={user.theme} />
    )
}