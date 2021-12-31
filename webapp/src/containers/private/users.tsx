import withPrivateLayout from '@/components/hof/with-private-layout';

const UsersList = () => {
  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold">Users List</h1>
    </div>
  );
};

export default withPrivateLayout(UsersList, { title: 'Users List' });
