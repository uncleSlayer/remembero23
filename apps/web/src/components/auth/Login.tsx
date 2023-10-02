import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app as firebaseApp } from "../../firebase";

const Login = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(firebaseApp)

    return (
        <div>
            <p className="text-3xl">Login</p>
            <button className="border my-3 rounded-lg p-2 px-4 bg-red-600" onClick={async () => {
                console.log('clicked')
                await signInWithPopup(auth, provider)
                    .then((result) => {
                        console.log(result);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }}>Login with Google</button>
        </div>
    )
}

export default Login