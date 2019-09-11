import React, { Component } from "react"
import { Tree, Input, Button } from "antd";
import styles from "./index.less";

export default class ScheduledTask extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    onSelect = (selectedKeys, info) => {
        console.log("selected", selectedKeys, info);
    };

    render() {
        const { TreeNode } = Tree;

        return (
            <div className={styles.treeNode}>
                <div style={{ float: 'left', margin: '10px 10px 0 10px', width: '93%' }}>
                    <div style={{ float: 'left' }}>
                        <Input style={{ width: '65%' }} /> <span style={{ marginLeft: '10px' }}><Button type="primary">搜索</Button></span>
                    </div>
                    {/* <div style={{float:'right'}}>
                        
                    </div> */}
                </div>

                <div style={{ float: 'left', width: '100%', }}>

                    <Tree
                        showLine
                        defaultExpandedKeys={['0-0-0', '0-0-1']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        onSelect={this.onSelect}
                    >
                        <TreeNode title="未处理" key="0-0">

                            <TreeNode title="未处理00000000001" key="0-0-0" />
                            <TreeNode title="未处理00000000002" key="0-0-1" />
                            <TreeNode title="未处理00000000003" key="0-0-2" />
                            <TreeNode title="未处理00000000004" key="0-0-3" />

                        </TreeNode>

                        <TreeNode title="处理中" key="0-1">
                            <TreeNode title="团指挥下发任务000000001" key="0-1-0" >
                                <TreeNode title="电源任务0000000001" key="0-1-0-0" >
                                    <TreeNode title="电源方案0000000001" key="0-1-0-0-0" >
                                        <TreeNode title="电源行动000000001" key="0-1-0-0-0-0" />
                                        <TreeNode title="电源总结000000002" key="0-1-0-0-0-1" />
                                    </TreeNode>
                                </TreeNode>

                                <TreeNode title="备件任务000000002" key="0-1-0-1" >
                                    <TreeNode title="备件方案000000001" key="0-1-0-1-0" >
                                        <TreeNode title="备件行动" key="0-1-0-1-0-0" />
                                        <TreeNode title="备件总结" key="0-1-0-1-0-1" />
                                    </TreeNode>
                                </TreeNode>

                                <TreeNode title="主车方案201905061134" key="0-1-0-2" >
                                    <TreeNode title="拟制行动(备件车去)" key="0-1-0-2-0" />
                                    <TreeNode title="拟制行动(备件车不去)" key="0-1-0-2-1" />
                                    <TreeNode title="主车拟制总结" key="0-1-0-2-2" />
                                    <TreeNode title="主车总结查看" key="0-1-0-2-3" />
                                </TreeNode>

                            </TreeNode>

                            <TreeNode title="巡修检计划" key="0-1-1" >
                                <TreeNode title="电源计划0000000001" key="0-1-1-0" >
                                    <TreeNode title="电源方案0000000001" key="0-1-1-0-0" >
                                        <TreeNode title="电源行动000000001" key="0-1-1-0-0-0" />
                                        <TreeNode title="电源总结000000002" key="0-1-1-0-0-1" />
                                    </TreeNode>
                                </TreeNode>

                                <TreeNode title="备件计划000000002" key="0-1-1-1" >
                                    <TreeNode title="备件方案000000001" key="0-1-1-1-0" >
                                        <TreeNode title="备件行动" key="0-1-1-1-0-0" />
                                        <TreeNode title="备件总结" key="0-1-1-1-0-1" />
                                    </TreeNode>
                                </TreeNode>

                                <TreeNode title="巡修检方案" key="0-1-1-2" >
                                    <TreeNode title="行动000000002" key="0-1-1-2-0" />
                                    <TreeNode title="总结000000002" key="0-1-1-2-1" />
                                </TreeNode>
                            </TreeNode>


                            <TreeNode title="备件支持任务" key="0-1-2" >
                                <TreeNode title="备件支持方案" key="0-1-2-0" />
                                <TreeNode title="备件支持行动" key="0-1-2-1" />
                                <TreeNode title="备件支持总结" key="0-1-2-2" />
                            </TreeNode>

                        </TreeNode>

                        <TreeNode title="已处理" key="0-2">

                            <TreeNode title="任务" key="0-2-0" >
                                <TreeNode title="分解下发电源子任务" key="0-2-0-0" >
                                    <TreeNode title="电源方案" key="0-2-0-0-0" >
                                        <TreeNode title="电源行动" key="0-2-0-0-0" />
                                        <TreeNode title="电源总结" key="0-2-0-0-1" />
                                    </TreeNode>
                                </TreeNode>

                                <TreeNode title="分解下发备件子任务" key="0-2-0-1" >
                                    <TreeNode title="备件方案" key="0-2-0-1" >
                                        <TreeNode title="备件行动" key="0-2-0-1-0" />
                                        <TreeNode title="备件总结" key="0-2-0-1-1" />
                                    </TreeNode>
                                </TreeNode>

                                <TreeNode title="任务方案" key="0-2-0-2" >
                                    <TreeNode title="任务行动" key="0-2-0-2-0" />
                                    <TreeNode title="任务总结" key="0-2-0-2-1" />
                                </TreeNode>
                            </TreeNode>

                            <TreeNode title="FKJB201920190424005" key="0-2-1" >
                                <TreeNode title="FKJB2019201904240501" key="0-2-1-0" />
                                <TreeNode title="FKJB2019201904240502" key="0-2-1-1" />
                            </TreeNode>

                            <TreeNode title="FKJB201920190424005" key="0-2-2" />
                            <TreeNode title="FKJB201920190424005" key="0-2-3" />
                            <TreeNode title="FKJB201920190424005" key="0-2-4" />
                            <TreeNode title="FKJB201920190424005" key="0-2-5" />


                        </TreeNode>

                    </Tree>

                </div>
                {/* <Demo /> */}
            </div >
        )
    }
}
// const { TreeNode } = Tree;

// class Demo extends React.Component {
//     state = {
//       treeData: [
//         {   title: '未处理', key: '0',
//             children:[
//                 {title: '未处理00000000001', key: '0-0',
//                     schme:[
//                         {title: '方案', key: '0-0-1'},
//                         {title: '方案', key: '0-0-1'},
//                     ]
//                 } ,
//                 {title: '巡修检计划', key: '0-0'} ,
//             ]              
//         },
//         { 
//             title: '处理中', key: '1',
//             children:[
//                 {title: '未处理00000000001', key: '1-0'} ,
//                 {title: '巡修检计划', key: '1-1'} ,
//             ]     
//         },
//         { 
//             title: '历史记录', key: '2',
//             children:[
//                 {title: '未处理00000000001', key: '2-0'} ,
//                 {title: '巡修检计划', key: '2-1'} ,
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