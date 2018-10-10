# Dash TreeView component.

TreeView component for [Dash](https://github.com/plotly/dash) framework.
Component is based on [Ant Design Tree widget](https://ant.design/components/tree/).

## Installation
```bash
pip install dash_treeview_antd
```

## Usage
See [usage.py](./usage.py) for exampe of use.

### Values
1. data - tree nodes data.
    ```yaml
    {
            "title": "Parent", # node title
            "key": "0", # node id (required to be unique)
            "children": [{
                "title": "Child",
                "key": "0-0",
                "children": [
                    {"title": "Subchild1", "key": "0-0-1"},
                    {"title": "Subchild2", "key": "0-0-2"},
                    {"title": "Subchild3", "key": "0-0-3"},
                ],
    }]}
    ```
2. selected, checked, expanded - keys of selected/checked/expanded nodes.
    ```yaml
    ["0", "0-1"]
    ```
