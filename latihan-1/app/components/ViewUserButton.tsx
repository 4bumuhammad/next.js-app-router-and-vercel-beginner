'use client';

interface ViewUserButtonProps{
    userId: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleClick = () => {
        console.log(`${new Date().toISOString()} -- lihat user`)
        alert(`AKU DI KLIK | user id: ${userId}`)
    };

    return(
        <>
            <button onClick={handleClick}>Lihat User</button>
        </>
    );
};

export default ViewUserButton
