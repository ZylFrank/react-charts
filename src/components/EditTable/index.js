import React, { useContext, useEffect, useRef, useState } from 'react';
import { Table, Form, Input, Button, Popconfirm, message } from 'antd';

import './style.css';

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      message.info(`Save failed: ${errInfo}`);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

function EditTable({ dataSource, columns, tableDataSave, tableDataAdd, tableDataDelete, size }) {
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const newColumns = [
    ...columns,
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="确定删除?" onConfirm={() => tableDataDelete(record.label)}>
            <span className="span2a">删除</span>
          </Popconfirm>
        ) : null,
    },
  ];

  const tableColumns = newColumns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: tableDataSave,
      }),
    };
  });

  return (
    <div>
      <Button
        onClick={tableDataAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        添加
      </Button>
      <Table
        components={components}
        bordered
        rowKey={(record) => record.label}
        dataSource={dataSource}
        columns={tableColumns}
        size={size}
      />
    </div>
  );
}

export default EditTable;
