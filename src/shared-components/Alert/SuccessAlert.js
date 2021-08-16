export default function ShowSuccessAlert(message) {
    return (
        <>
           <div
                className={"text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500"}>

                <span className="inline-block flex justify-center align-middle mr-8">

                    {message}

                </span>

            </div>
        </>
    );
};
