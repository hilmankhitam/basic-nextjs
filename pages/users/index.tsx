import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

interface UsersProps {
    dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
    const { dataUsers } = props;
    console.log(dataUsers);
    const router = useRouter();

    return (

        <Layout pageTitle="Users Page">
            <p>Users Page</p>
            {dataUsers.map((user) => (
                <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </Layout>

    )

}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    return {
        props: {
            dataUsers,
        },
    };
}