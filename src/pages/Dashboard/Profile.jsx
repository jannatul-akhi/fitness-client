import axios from "axios";
import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
    const { user } = useAuthContext();
    console.log(user?.email);
    const [loggedUser, setLoggedUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user-get');
                console.log(response.data);

                const userData = response.data.find(item => {
                    console.log("Checking email:", item.email);
                    return item.email === user.email;
                });

                console.log("User data:", userData);
                setLoggedUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const first_name = form?.first_name?.value;
        const last_name = form?.last_name?.value;
        const email = form?.email?.value;
        const phone = form?.phone?.value;
        const address = form?.address?.value;
        const city = form?.city?.value;
        const state = form?.state?.value;
        const zip = form?.zip?.value;
        const username = form?.username?.value;
        const image = form?.image?.value;
        const description = form?.description?.value;

        const userInfo = { first_name, last_name, email, phone, address, city, state, zip, username, image, description };

        try {
            const updateUserData = axios.patch(`http://localhost:3000/user-update/${loggedUser?._id}`, userInfo);
            console.log(updateUserData);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Update successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        } catch (e) {
            console.error('Error fetching user data:', e);
        }
    }

    return (
        <div>
            <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{loggedUser?.first_name + ' ' + loggedUser?.last_name}</h2>
                        <span className="text-sm dark:text-gray-400">General user</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-400">{loggedUser?.email}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                            </svg>
                            <span className="dark:text-gray-400">{user?.email ? loggedUser?.phone : '+XX XXX XX XX'}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="border border-black mx-5"></div>
            <div>
                <h3 className="text-center text-3xl font-bold mt-3 text-[#F63E7B] uppercase">Update Account</h3>
            </div>
            <div className="">
                <section className="p-6">
                    <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Personal Inormation</p>
                                <p className="text-xs">Give your personal information here</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="firstname" className="text-sm">First name</label>
                                    <input value={loggedUser?.first_name} name="first_name" readOnly id="firstname" type="text" placeholder="First name" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="lastname" className="text-sm">Last name</label>
                                    <input value={loggedUser?.last_name} name="last_name" readOnly id="lastname" type="text" placeholder="Last name" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                    <input value={loggedUser?.email} name="email" readOnly id="email" type="email" placeholder="Email" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="phone" className="text-sm">Phone</label>
                                    <input defaultValue={user?.email ? loggedUser?.phone : ''} name="phone" id="phone" type="number" placeholder="Phone" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Address</label>
                                    <input defaultValue={user?.email ? loggedUser?.address : ''} name="address" id="address" type="text" placeholder="" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="city" className="text-sm">City</label>
                                    <input defaultValue={user?.email ? loggedUser?.city : ''} name="city" id="city" type="text" placeholder="" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="state" className="text-sm">State / Province</label>
                                    <input defaultValue={user?.email ? loggedUser?.state : ''} name="state" id="state" type="text" placeholder="" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                    <input defaultValue={user?.email ? loggedUser?.zip : ''} id="zip" name="zip" type="number" placeholder="" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Profile</p>
                                <p className="text-xs">This info show your profile</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="username" className="text-sm">Username</label>
                                    <input defaultValue={user?.email ? loggedUser?.username : ''} name="username" id="username" type="text" placeholder="Username" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="image" className="text-sm">Image Url</label>
                                    <input defaultValue={user?.email ? loggedUser?.image : ''} name="image" id="image" type="text" placeholder="https://" className="w-full py-4 pl-5 rounded-md border border-black text-gray-900 focus:outline-none" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Bio</label>
                                    <textarea defaultValue={user?.email ? loggedUser?.description : ''} name="description" id="bio" placeholder="" className="w-full h-40 rounded-md border border-black text-gray-900 focus:outline-none"></textarea>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Photo</label>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full" />
                                        <button type="submit" className="px-4 py-2 border rounded-md bg-[#F63E7B]">Update</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Profile;