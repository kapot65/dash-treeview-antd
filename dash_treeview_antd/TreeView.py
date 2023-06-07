# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TreeView(Component):
    """A TreeView component.
TreeView component for Dash

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- checkable (boolean; default False):
    Adds a Checkbox before the treeNodes (Default - False).

- checked (list of strings; optional):
    List of keys of checked nodes.

- data (list; default [    {        title: 'Parent',        key: '0',        children: [            {                title: 'Child',                key: '0-0',                children: [                    {title: 'Subchild', key: '0-0-1'},                    {title: 'Subchild', key: '0-0-2'},                    {title: 'Subchild', key: '0-0-3'},                ],            },        ],    },]):
    Tree data.

- expanded (list of strings; default ['0']):
    List of keys of expanded nodes.

- multiple (boolean; default True):
    Allows selecting multiple treeNodes (Default - False).

- selected (list of strings; optional):
    List of keys of selected nodes."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_treeview_antd'
    _type = 'TreeView'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, checkable=Component.UNDEFINED, multiple=Component.UNDEFINED, data=Component.UNDEFINED, checked=Component.UNDEFINED, selected=Component.UNDEFINED, expanded=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'checkable', 'checked', 'data', 'expanded', 'multiple', 'selected']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'checkable', 'checked', 'data', 'expanded', 'multiple', 'selected']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(TreeView, self).__init__(**args)
