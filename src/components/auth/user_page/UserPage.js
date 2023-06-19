import React from 'react';
import Layout from '../../layout/Layout';
import { useParams } from 'react-router-dom';
import { getMe } from '../../../api/auth';
import MessageError from '../../shared/MessageAlert';
import UserDetail from './UserDetail';

const UserPage = ({ ...props }) => {
  const [myData, setMyData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const resetError = () => setError(null);
  const params = useParams();

  React.useEffect(() => {
    data(params.id);
  }, [params.id]);

  const data = async id => {
    setError();
    setIsLoading(true);
    try {
      const data = await getMe(id);
      setMyData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(myData);

  return (
    <Layout {...props}>
      <div>
        <UserDetail user={myData} isLoading={isLoading} />
      </div>
      {error ? (
        <MessageError message={error.message} onClick={resetError} />
      ) : null}
    </Layout>
  );
};

export default UserPage;
