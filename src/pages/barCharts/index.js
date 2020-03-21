import React, { useRef, useState } from 'react';
import { Bar } from '@antv/g2plot';
import { Card, Modal, Tooltip } from 'antd';
import { SettingOutlined, FileImageOutlined } from '@ant-design/icons';

import EditTable from '../../components/EditTable';
import BarChart from '../../components/Charts';

import './style.css';

function BarChartPage() {
  const chartRef = useRef();
  const [data, setData] = useState([
    { label: '1951 年', value: 38 },
    { label: '1952 年', value: 52 },
    { label: '1956 年', value: 61 },
    { label: '1957 年', value: 145 },
    { label: '1958 年', value: 48 },
  ]);
  const [visible, setVisible] = useState(false);

  const columns = [
    {
      title: 'label',
      dataIndex: 'label',
      editable: true,
    },
    {
      title: 'value',
      dataIndex: 'value',
      editable: true,
    },
  ];

  const tableDataSave = (row) => {
    const { value, ...otherValues } = row;
    const newData = [...data];
    const index = newData.findIndex((item) => row.label === item.label);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...otherValues, value: parseInt(value, 10) });
    setData(newData);
  };

  const tableDataAdd = () => {
    setData([...data, { label: `label${data.length}`, value: 0 }]);
  };

  const tableDataDelete = (label) => {
    const newData = [...data].filter((item) => item.label !== label);
    setData(newData);
  };

  const toggerModal = () => {
    setVisible(!visible);
  };

  const downloadImage = () => {
    const dataURL = chartRef.current.firstElementChild.toDataURL('image/png', 1.0);
    const a = document.createElement('a');
    a.target = '_black';
    a.href = dataURL;
    a.download = 'barChart.png';
    a.click();
  };

  return (
    <Card
      bordered={false}
      title="柱状图"
      extra={
        <span className="extraIcon">
          <Tooltip placement="bottom" title="生成图片">
            <FileImageOutlined onClick={downloadImage} />
          </Tooltip>
          <Tooltip placement="bottom" title="配置数据">
            <SettingOutlined onClick={toggerModal} />
          </Tooltip>
        </span>
      }
    >
      <BarChart
        ref={chartRef}
        Plot={Bar}
        data={data}
        configOptions={{
          xField: 'value',
          yField: 'label',
          colorField: 'label',
          legend: {
            visible: true,
            position: 'bottom-center',
          },
        }}
      />
      <Modal
        width={800}
        title="配置数据"
        visible={visible}
        onOk={toggerModal}
        okText="确认"
        cancelText="取消"
        onCancel={toggerModal}
      >
        <EditTable
          size="small"
          dataSource={data}
          columns={columns}
          tableDataSave={(e) => tableDataSave(e)}
          tableDataAdd={tableDataAdd}
          tableDataDelete={(e) => tableDataDelete(e)}
        />
      </Modal>
    </Card>
  );
}

export default BarChartPage;
