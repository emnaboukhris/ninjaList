import Link from "next/dist/client/link";
import { useEffect } from 'react'
import {useRouter} from 'next/router'
const NotFound = () => {
    const router = useRouter() ; 
useEffect(() => {
    setTimeout(()=> {
// router.go(-1)
router.push("/")
    },3000)
    console.log('use effect ran')
}, [])
    return ( 
        <div className="not-found">
<h1> Ooops ...</h1>
<h2>That page connot be found</h2>
<p>go back to the Homepage <Link href="/"><a>Homepage</a></Link></p>


        </div>
     );
}
 
export default NotFound;