import { useState } from 'react';

import { fileStructure } from './json_data';
import styles from './FileExplorer.module.css';

const FileTree = ({
  fileStructure,
  onAddFolderHandler,
  onDeleteFolderHandler,
}) => {
  const [isExpanded, setIsExpanded] = useState({});
  const [isFeaturesVisible, setIsFeaturesVisible] = useState({});

  //   handler functions
  // This is the handler function to check whether the tree is expanded or not
  const onExpandClickHandler = (event, node) => {
    setIsExpanded((pv) => ({ ...pv, [node?.name]: !pv[node?.name] }));
  };

  // This is the handler function to show the additional features on hover
  const featureshandler = (node) => {
    setIsFeaturesVisible((pv) => ({ ...pv, [node?.name]: !pv[node?.name] }));
  };

  // This is the handler function to add new folder on the file tree structure
  const onAddClickHandler = (event, parentId) => {
    event.stopPropagation();
    onAddFolderHandler(parentId);
  };

  // This is the handler function to delete folder or file from the file tree structure
  const onDeleteClickHandler = (event, parentId) => {
    event.stopPropagation();
    onDeleteFolderHandler(parentId);
  };

  return fileStructure?.map((node) => (
    <div
      className={styles.fileTreeStructure}
      key={node?.id}>
      <div className={styles.folderNameLabel}>
        {/* creating a button if its folder */}
        {node?.isFolder && (
          <div
            className={styles.filebtnContainer}
            onMouseEnter={() => featureshandler(node)}
            onMouseLeave={() => featureshandler(node)}>
            <button
              className={styles.fileExpanderbtn}
              onClick={(event) => onExpandClickHandler(event, node)}>
              <span>📁</span>
              <span>{node?.name}</span>
            </button>
            {isFeaturesVisible[node?.name] && (
              <div className={styles.featuresContainer}>
                <button
                  className={styles.fileExpanderbtn}
                  onClick={(event) => onAddClickHandler(event, node?.id)}>
                  <span>➕</span>
                </button>
                {!node?.isRoot && <button className={styles.fileExpanderbtn} onClick={(event)=>onDeleteClickHandler(event,node?.id)}>
                  <span>🗑️</span>
                </button>}
              </div>
            )}
          </div>
        )}
        {/* creating a button if its not folder */}
        {!node?.isFolder && (
          <div
            className={styles.filebtnContainer}
            onMouseEnter={() => featureshandler(node)}
            onMouseLeave={() => featureshandler(node)}>
            <button className={styles.fileExpanderbtn}>
              <span>📄</span>
              <span>{node?.name}</span>
            </button>
            {isFeaturesVisible[node?.name] && (
              <button className={styles.fileExpanderbtn} onClick={(event)=>onDeleteClickHandler(event,node?.id)}>
                <span>🗑️</span>
              </button>
            )}
          </div>
        )}
      </div>
      {/* Only show the children tree is expanded and its a folder */}
      {isExpanded[node?.name] && node?.isFolder && (
        <FileTree
          fileStructure={node?.children}
          onAddFolderHandler={onAddFolderHandler}
          onDeleteFolderHandler={onDeleteFolderHandler}
        />
      )}
    </div>
  ));
};

const FileExplorerComponent = () => {
  const [fileData, setFileData] = useState(fileStructure);
  // Handler functions
  const addNewFolder = (parentId) => {
    const folderName = prompt('Enter the Folder Name');

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
                name: folderName,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if(node.children){
          return {...node,children:updateTree(node.children)}
        }
        return node
      });
    };
    setFileData((prev) => updateTree(prev));
  };

  const deleteFolder = (parentId) => {

    // This is the Function to delete the node
    const deleteNode=(list)=>{
      // Filter condition to filter the id and map to again filter for children
      return list.filter((node)=>node.id != parentId).map((node)=>{
        if(node.children){
          return {...node,children:deleteNode(node.children)}
        }
        return node
      })
    }

    setFileData((prev)=>deleteNode(prev))
  };

  return (
    <div>
      <h1>Welcome to File Explorer</h1>
      <div className={styles.fileTreeContainer}>
        <FileTree
          fileStructure={fileData}
          onAddFolderHandler={addNewFolder}
          onDeleteFolderHandler={deleteFolder}
        />
      </div>
    </div>
  );
};

export default FileExplorerComponent;
