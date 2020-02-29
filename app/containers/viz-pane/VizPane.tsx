import React from 'react';
import { Button, Intent, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { CodeEditor, ResultView } from '../../components';
import styles from './VizPane.css';
// eslint-disable-next-line import/no-cycle
import { mapStateToProps, mapDispatchToProps } from './index';

type StoreProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

interface OwnProps {}

type Props = StoreProps & OwnProps;

const VizPane: React.FC<Props> = ({ activeConnection }) => {
  const runScript = () => {};

  const clearScript = () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.codeEditor}>
        <div className={styles.editorHeader}>
          <div className={styles.editorHeaderConnection}>
            {activeConnection ? (
              <>
                <Icon
                  icon={IconNames.DATABASE}
                  iconSize={Icon.SIZE_STANDARD}
                  style={{ marginRight: '8px' }}
                />
                {activeConnection.name} [${activeConnection.host}:$
                {activeConnection.port}]
              </>
            ) : (
              <div>Not connected</div>
            )}
          </div>
          <div className={styles.editorHeaderButtonWrapper}>
            <Button
              text="Run"
              icon={IconNames.REFRESH}
              intent={Intent.SUCCESS}
              onClick={runScript}
              disabled={!activeConnection}
              className={styles.editorHeaderButtons}
            />
            <Button
              text="Clear"
              icon={IconNames.ERASER}
              intent={Intent.WARNING}
              onClick={clearScript}
              disabled={!activeConnection}
              className={styles.editorHeaderButtons}
            />
          </div>
        </div>
        <CodeEditor />
      </div>
      <div className={styles.resultView}>
        <ResultView />
      </div>
    </div>
  );
};

export default VizPane;