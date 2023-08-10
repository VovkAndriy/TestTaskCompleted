import React, { useState, useEffect } from "react";
import styles from './styles.module.css';
import adminpanel from '../../assets/adminpanel.png';
import person from '../../assets/person.png';
import Block from "../components/Block";
import Invited from "../components/Invited";

interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}

type Role = "Administrator" | "Standard";

type Status = "request" | "pending" | "approved" | "declined" | "invited";

interface UserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

interface Invite {
  id: number;
  phone: string;
  role: Role;
}

const UsersAndInvites: React.FC = () => {
  const [users, setUsers] = useState<TeamMember[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);

  useEffect(() => {
    const mockUsers: TeamMember[] = [
      {
        id: 1,
        status: "approved",
        user: {
          id: 101,
          name: "Joespeh",
          lastName: "Bloggs",
          phone: "123-456-7890",
          email: "john@example.com",
        },
        role: "Administrator",
      },
      {
        id: 2,
        status: "approved",
        user: {
          id: 101,
          name: "Sarah",
          lastName: "Connors",
          phone: "123-456-7890",
          email: "john@example.com",
        },
        role: "Administrator",
      },
      {
        id: 3,
        status: "approved",
        user: {
          id: 101,
          name: "Mathew",
          lastName: "Murphy",
          phone: "123-456-7890",
          email: "john@example.com",
        },
        role: "Administrator",
      },
      {
        id: 4,
        status: "approved",
        user: {
          id: 101,
          name: "John",
          lastName: "Doe",
          phone: "123-456-7890",
          email: "john@example.com",
        },
        role: "Administrator",
      },
      {
        id: 5,
        status: "approved",
        user: {
          id: 101,
          name: "Joespeh",
          lastName: "Bloggs",
          phone: "123-456-7890",
          email: "john@example.com",
        },
        role: "Administrator",
      },
      {
        id: 6,
        status: "approved",
        user: {
          id: 101,
          name: "Sarah",
          lastName: "Connors",
          phone: "123-456-7890",
          email: "john@example.com",
        },
        role: "Administrator",
      },
      {
        id: 7,
        status: "approved",
        user: {
          id: 101,
          name: "Mathew",
          lastName: "Murphy",
          phone: "123-456-7890",
          email: "john@example.com",
        },
        role: "Administrator",
      },
      {
        id: 8,
        status: "approved",
        user: {
          id: 101,
          name: "John",
          lastName: "Doe",
          phone: "123-456-7890",
          email: "john@example.com",
        },
        role: "Administrator",
      },
    ];

    const mockInvites: Invite[] = [
      {
        id: 1,
        phone: "+353 1234567",
        role: "Standard",
      },
    ];

    setUsers(mockUsers);
    setInvites(mockInvites);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.adminBlock}>
        <div className={styles.headingAdmin}>
          <img src={adminpanel} alt="admin" />
          <span style={{ marginLeft: '4px' }}>Administrators</span>
        </div>
        <div >
          <Block name='Joe' lastName='Bloggs' />
          <Block name='Sarah' lastName='Connors' />
        </div>
        {invites.map((invite) => (
          <div key={invite.id}>
            <Invited phoneNumber={invite.phone} />
          </div>
        ))}
      </div>
      <section className={styles.adminBlock}>
        <div className={styles.headingAdmin}>
          <img src={person} alt="users" />
          <span style={{ marginLeft: '4px' }}>Standard Users</span>
        </div>
        {users.map((user) => (
          <div key={user.id}>
            <Block name={user.user.name} lastName={user.user.lastName} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default UsersAndInvites;
