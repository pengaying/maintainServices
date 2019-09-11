import React, { Component } from 'react'
import { Tree, Input, Button } from 'antd';
import styles from './MaintainGuidance.less';

export default class EquipTree extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    render() {
        const { TreeNode } = Tree;

        return (
            <div className={styles.treeNode}>
                <div style={{ float: 'left' }}>
                    <Tree
                        showLine
                        defaultExpandedKeys={['0-1-0', '0-1-1','0-1-2','0-1-3','0-1-4','0-1-5']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        onSelect={this.onSelect}
                    >
                        <TreeNode title='装备目录' key='0-0'>
                            <TreeNode title='指挥控制设备' key='0-1-0' >
                                <TreeNode title='指挥控制设备1' key='0-1-0-0' />
                            </TreeNode>

                            <TreeNode title='雷达对抗设备' key='0-1-1' >
                                <TreeNode title='雷达对抗设备1' key='0-1-1-0' />
                            </TreeNode>

                            <TreeNode title='通信对抗设备' key='0-1-2' >
                                <TreeNode title='通信对抗设备1' key='0-1-2-0' />
                            </TreeNode>

                            <TreeNode title='光电对抗设备' key='0-1-3' >
                                <TreeNode title='光电对抗设备1' key='0-1-3-0' />
                            </TreeNode>

                            <TreeNode title='雷达设备' key='0-1-4' >
                                <TreeNode title='雷达设备1' key='0-1-4-0' />
                            </TreeNode>

                            <TreeNode title='通信设备' key='0-1-5' >
                                <TreeNode title='通信设备1' key='0-1-5-0' />
                            </TreeNode>
                        </TreeNode>
                    </Tree>

                </div>
                {/* <Demo /> */}
            </div>
        )
    }
}
// const { TreeNode } = Tree;

// class Demo extends React.Component {
//     state = {
//       treeData: [
//         {   title: '未处理', key: '0',
//             children:[
//                 {title: '维修任务', key: '0-0',
//                     schme:[
//                         {title: '方案', key: '0-0-1'},
//                         {title: '方案', key: '0-0-1'},
//                     ]
//                 } ,
//                 {title: '备件任务', key: '0-0'} ,
//             ]              
//         },
//         { 
//             title: '正在处理', key: '1',
//             children:[
//                 {title: '维修任务', key: '1-0'} ,
//                 {title: '备件任务', key: '1-1'} ,
//             ]     
//         },
//         { 
//             title: '历史记录', key: '2',
//             children:[
//                 {title: '维修任务', key: '2-0'} ,
//                 {title: '备件任务', key: '2-1'} ,
//             ]   
//         },
//       ],
//     };

//     // onLoadData = treeNode =>
//     //   new Promise(resolve => {
//     //     if (treeNode.props.children) {
//     //       resolve();
//     //       return;
//     //     }
//     //     setTimeout(() => {
//     //       treeNode.props.dataRef.children = [
//     //         { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
//     //         { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
//     //       ];
//     //       this.setState({
//     //         treeData: [...this.state.treeData],
//     //       });
//     //       resolve();
//     //     }, 1000);
//     //   });

//     // renderTreeNodes = data =>
//     //   data.map(item => {
//     //     if (item.children) {
//     //       return (
//     //         <TreeNode title={item.title} key={item.key} dataRef={item}>
//     //             {this.renderTreeNodes(item.children)}

//     //             <TreeNode title={item.title} key={item.key} dataRef={item}>
//     //                 {this.renderTreeNodes(item.children)}
//     //                 <TreeNode title={item.title} key={item.key} dataRef={item}>
//     //                     {this.renderTreeNodes(item.children)}
//     //                 </TreeNode>
//     //             </TreeNode>

//     //         </TreeNode>
//     //       );
//     //     }
//     //     return <TreeNode {...item} dataRef={item} />;
//     //   });

//     render() {
//       return (
//         <Tree>
//              { 
//                 this.state.treeData.map(item => {
//                     if (item.children) {
//                         return (
//                             <TreeNode title={item.title} key={item.key}>
//                                 {item.children.title}

//                                 <TreeNode title={item.title} key={item.key} dataRef={item}>
//                                     {item.children.title}
//                                     <TreeNode title={item.title} key={item.key} dataRef={item}>
//                                         {item.children.title}
//                                     </TreeNode>
//                                 </TreeNode>

//                             </TreeNode>
//                         );
//                     }
//                     return <TreeNode {...item} dataRef={item} />;
//                 })
//             }
//         </Tree>

//       )

//     }
// }