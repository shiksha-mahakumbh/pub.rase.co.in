import React from 'react';
import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const JournalCard: React.FC = () => (
  <div className="min-h-screen bg-orange-100 flex items-center justify-center">
    <Row gutter={[16, 16]} className="w-full max-w-screen-lg p-4">
      <Col xs={24} sm={12} md={6} lg={6}>
      <Link href='https://vie.rase.co.in/'>
        <Card title="Viksit India English" bordered={false}>
          <div className="flex justify-center">
            <Image alt="Viksit India" src="/vie.jpeg" height={150} width={300} className="object-contain" />
          </div>
        </Card>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={6} lg={6}>
      <Link href='https://vih.rase.co.in/'>
        <Card title="Viksit India Hindi" bordered={false}>
          <div className="flex justify-center">
            <Image alt="Viksit India" src="/vih.jpeg" height={150} width={300} className="object-contain" />
          </div>
        </Card>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={6} lg={6}>
      <Link href='https://vbe.rase.co.in/'>
        <Card title="Viksit Bharat English" bordered={false}>
          <div className="flex justify-center">
            <Image alt="Viksit Bharat" src="/vbh.png" height={150} width={300} className="object-contain" />
          </div>
        </Card>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={6} lg={6}>
      <Link href='https://vbh.rase.co.in/'>
        <Card title="Viksit Bharat Hindi" bordered={false}>
          <div className="flex justify-center">
            <Image alt="Viksit Bharat" src="/vbe.png" height={150} width={300} className="object-contain" />
          </div>
        </Card>
        </Link>
      </Col>
    </Row>
  </div>
);

export default JournalCard;
