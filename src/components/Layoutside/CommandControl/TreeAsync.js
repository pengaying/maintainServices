import React from 'react';
import { Tree, Spin, message } from 'antd';
import { getTree, delateLevel } from '../../axios/manageGoods'
const { TreeNode, DirectoryTree } = Tree;

class MyTree extends React.Component {
  state = {
    treeData: [],
    show: false,
    loading: false,
    rightClickNodeTreeItem: {},
    loadedKeys: []
  };
  constructor(props, context) {
    super(props);

  }
  toggleLoading = value => {
    this.setState({
      loading: value
    })
  }
  initData() {
    this.toggleLoading(true);
    getTree({ "level": 1 }).then(res => {
      this.toggleLoading(false);
      var arr = [];
      res.map(item => {
        arr.push({
          ...item,
          key: item.catId,
          title: item.catName
        })
      })
      this.setState({
        "treeData": arr,
        loadedKeys: []
      })
    })
  }
  componentDidMount() {
    this.initData();
    this.props.onRef(this);
    document.addEventListener('click', e => {
      this.setState({
        show: false
      })
      e.stopPropagation();
    });
  }
  componentWillUnmount() {
    document.removeEventListener('click');
  }
  onLoadData = treeNode =>
    new Promise(resolve => {
      if (treeNode.props.children) {
        console.log("chil", treeNode.props.children)
        resolve();
        return;
      }
      console.log("chil", treeNode.props.children)
      getTree({
        catId: treeNode.props.dataRef.catId,
        level: parseInt(treeNode.props.dataRef.catLevel) + 1
      }).then(res => {

        var arr = [];
        res.map(item => {
          if (item["catLevel"] === "3") {
            arr.push({
              ...item,
              key: item.catId,
              title: item.catName,
              isLeaf: true
            })
          } else {
            arr.push({
              ...item,
              key: item.catId,
              title: item.catName
            })
          }

        })
        treeNode.props.dataRef.children = arr;
        this.setState({
          treeData: [...this.state.treeData],
        });


        resolve();
      })

      console.log(treeNode);
    });

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );

      }
      return <TreeNode {...item} dataRef={item} />;
    });
  getNodeTreeRightClickMenu = () => {
    console.log(this.state.rightClickNodeTreeItem);
    const { pageX, pageY, } = { ...this.state.rightClickNodeTreeItem };
    const tmpStyle = {
      position: "absolute",
      zIndex: 999,
      left: `${pageX - 210}px`,
      top: `${pageY - 150}px`
    };
    const menu = (
      <div style={tmpStyle} className="self-right-menu">
        {this.state.rightClickNodeTreeItem["dataRef"]["isLeaf"] ? (<div> <a>分类参数</a></div>) : (<div> <a>添加</a></div>)}

        <div> <a>重命名</a></div>
        <div onClick={this.delateCat.bind(this)}> <a href="javascript:;">删除</a></div>
      </div>
    );
    return menu;
  };

  render() {

    return (
      <Spin spinning={this.state.loading} size="large" tip="加载中...">
        <div>
          {
            //loadedKeys={[]}
          }
          {this.state.treeData ? <DirectoryTree
            loadData={this.onLoadData}
            onLoad={loadedKeys => {
              this.setState({
                loadedKeys: loadedKeys
              }, () => {
                console.log(this.state.loadedKeys);
              })
            }}
            loadedKeys={this.state.loadedKeys}
            onRightClick={this.rightClick.bind(this)}>
            {this.renderTreeNodes(this.state.treeData)}
          </DirectoryTree> : ("loading...")}
          {this.state.show ? this.getNodeTreeRightClickMenu() : ""}
          <style>
            {`
            .self-right-menu> div{
                background:#fff;
                padding:10px;
                border-bottom:1px solid #ccc;
            }
            `}
          </style>

        </div>
      </Spin>
    )
  }
  cancelRight = e => {
    this.setState({
      show: false
    })
    e.stopPropagation();
  }
  delateCat = e => {
    e.stopPropagation();
    delateLevel({ "catid": this.state.rightClickNodeTreeItem["dataRef"]["catId"] }).then(res => {
      console.log(res);
      if (res["code"] == "0") {
        message.success("删除成功！").then(() => {
          //  const {history}=this.props;
          //  history.go(0);
          this.initData();
        });
      } else if (res["code"] == "1") {
        message.error("删除失败！此分类有下级目录");
      } else if (res["code"] == "2") {
        message.error("删除失败！类别下存在商品");
      } else {
        message.error("删除失败！类别不存在");
      }
    }).catch(err => { console.log(err) })

  }
  rightClick(e) {
    console.log(e.node, e.event.pageX);
    this.setState({
      rightClickNodeTreeItem: {
        ...e.node.props,
        pageX: e.event.pageX,
        pageY: e.event.pageY
      }
    }, () => {
      this.setState({
        show: true
      })
    });
  }
}
export default MyTree;