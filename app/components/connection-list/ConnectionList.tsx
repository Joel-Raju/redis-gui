import React from 'react';
import ConnectionListItem from './ConnectionListItem';
import { RedisConnection } from '../../types';
import styles from './ConnectionList.css';

interface Props {
  dataSource: Array<RedisConnection>;
  activeConnection: RedisConnection | undefined;
  onEdit: (connection: RedisConnection) => void;
  onClick: (connection: RedisConnection) => void;
  onRightClick: (connection: RedisConnection) => void;
}

const ConnectionList: React.FC<Props> = ({
  dataSource,
  activeConnection,
  onClick,
  onEdit,
  onRightClick
}) => {
  return (
    <div className={styles.listWrapper}>
      {Array.isArray(dataSource) &&
        dataSource.map(connection => (
          <ConnectionListItem
            key={connection.id}
            connection={connection}
            isActive={
              activeConnection &&
              connection.id.toLowerCase() === activeConnection.id.toLowerCase()
            }
            onEdit={() => onEdit(connection)}
            onClick={() => onClick(connection)}
            onRightClick={() => onRightClick(connection)}
          />
        ))}
    </div>
  );
};

export default ConnectionList;
