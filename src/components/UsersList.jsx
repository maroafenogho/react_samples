import { Fragment } from "react";
import Avatar from "./Avatar";


const textStyle = { margin: '0px' }

const users = [{
    id: 0,
    name: 'Maro',
    job: 'Software Engineer',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Image',
    theme: { height: '100px', width: '100px', borderRadius: '50px', marginRight: '20px' }
},
{
    id: 1,
    name: 'John',
    job: 'Software Engineer',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Image',
    theme: { height: '100px', width: '100px', borderRadius: '50px', marginRight: '20px' }
},
{
    id: 2,
    name: 'Jane',
    job: 'Software Architect',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Image',
    theme: { height: '100px', width: '100px', borderRadius: '50px', marginRight: '20px' }
}]

export default function UsersListItem() {
    const items = users.map((user) => {
        return <Fragment key={user.id}>
            {/* Add lines between elements */}
            {user.id > 0 && <hr />}

            <div style={{ display: 'flex', flexDirection: "row" }}>
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

        </Fragment>
    });
    return (
        <ul>
            {items}
        </ul>
    )
}
