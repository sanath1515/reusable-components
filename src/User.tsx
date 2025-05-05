import React from 'react';

interface AddressProps {
    city:string;
}

interface DetailsProps {
    id:string;
    name:string;
    address:AddressProps;
    username:string;
}

interface UserProps{
    details: DetailsProps;
}

const User : React.FC<UserProps> = ({details}) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '10px' }}>
            <div style={{fontWeight:'bold'}}>{details.id}</div>
            <div style={{fontWeight:'bold'}}>{details.name}</div>
            <div>{details.address.city}</div>
            <div>{details.username}</div>
            <div>{details.username}</div>
        </div>
    );
};

export default User;
