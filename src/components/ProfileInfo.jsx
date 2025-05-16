import Avatar from "./Avatar"

export default function ProfileInfo() {

    const user = {
        name: 'Maro',
        job: 'Software Engineer',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Image',
        theme: { height: '100px', width: '100px', borderRadius: '50px', marginRight: '20px' }
    }
    const textStyle = { margin: '0px' }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Avatar user={user} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }}>
                    <h4 style={textStyle}>{user.name}</h4>
                    <p style={textStyle}>{user.job}</p>
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <h4 style={textStyle}>Hobbies:</h4>
                        <p style={textStyle}> cooking, football, learning</p>
                    </div>
                </div>
            </div>

        </>
    )
}

