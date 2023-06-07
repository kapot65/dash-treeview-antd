import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {Tree} from 'antd';
import 'antd/dist/antd.min.css';
const TreeNode = Tree.TreeNode;

/**
 * TreeView component for Dash
 */
export default class TreeView extends Component {
    constructor(props) {
        super(props);
        this.renderTreeNode = this.renderTreeNode.bind(this);
    }

    renderTreeNode(nodeData) {
        const dataArray = Array.isArray(nodeData) ? nodeData : [nodeData];
        return dataArray.map(item => (
            <TreeNode key={item.key} title={item.title}>
                {item.children ? this.renderTreeNode(item.children) : ''}
            </TreeNode>
        ));
    }

    render() {
        const {
            id,
            checkable,
            multiple,
            checked,
            expanded,
            selected,
            setProps,
            data,
        } = this.props;

        return (
            <div id={id}>
                <Tree
                    checkable={checkable}
                    multiple={multiple}
                    defaultExpandedKeys={expanded}
                    defaultSelectedKeys={selected}
                    defaultCheckedKeys={checked}
                    onSelect={e => setProps({selected: e})}
                    onCheck={e => setProps({checked: e})}
                    onExpand={e => setProps({expanded: e})}
                >
                    {data ? this.renderTreeNode(data) : ''}
                </Tree>
            </div>
        );
    }
}

const PropTreeNodeShape = {
    /**
     * Node ID
     */
    key: PropTypes.string.isRequired,
    /**
     * Disables the node (Default - false)
     */
    disabled: PropTypes.bool,
    /**
     * Disables the checkbox of the  node (Default - false)
     */
    disableCheckbox: PropTypes.bool,
    /**
     * Set whether the treeNode can be selected (Default - true)
     */
    selectable: PropTypes.bool,

    /**
     * Node text
     */
    title: PropTypes.string,
};

const PropTreeNode = PropTypes.shape(PropTreeNodeShape);
PropTreeNodeShape.children = PropTypes.arrayOf(PropTreeNode);

TreeView.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Adds a Checkbox before the treeNodes (Default - false)
     */

    checkable: PropTypes.bool,
    /**
     * Allows selecting multiple treeNodes (Default - false)
     */
    multiple: PropTypes.bool,

    /**
     * Tree data
     */
    data: PropTypes.arrayOf(PropTreeNode),

    /**
     * List of keys of checked nodes.
     */
    checked: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of keys of selected nodes.
     */
    selected: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of keys of expanded nodes.
     */
    expanded: PropTypes.arrayOf(PropTypes.string),

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,
};

TreeView.defaultProps = {
    data: [
        {
            title: 'Parent',
            key: '0',
            children: [
                {
                    title: 'Child',
                    key: '0-0',
                    children: [
                        {title: 'Subchild', key: '0-0-1'},
                        {title: 'Subchild', key: '0-0-2'},
                        {title: 'Subchild', key: '0-0-3'},
                    ],
                },
            ],
        },
    ],
    checkable: false,
    multiple: true,
    checked: [],
    selected: [],
    expanded: ['0'],
};
