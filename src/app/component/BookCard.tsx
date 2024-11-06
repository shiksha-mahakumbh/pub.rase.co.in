import React from 'react';
import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const BooksCard: React.FC = () => (
  <div className="min-h-screen bg-orange-100 flex items-center justify-center">
    <Row gutter={[16, 16]} className="w-full max-w-screen-lg p-4">
      <Col xs={24} sm={12} md={6} lg={6}>
      <Link href='/Role of academic driven startups in economy.pdf'>
        <Card title="Role of Academic Driven Startups in Economics" bordered={false}>
          <div className="flex justify-center">
            <Image alt="" src="/Role.jpeg" height={150} width={300} className="object-contain" />
          </div>
        </Card>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={6} lg={6}>
      <Link href='https://vih.rase.co.in/'>
        <Card title="Role of Academic Driven Startups in Developing Economy of Jammu & Kashmir " bordered={false}>
          <div className="flex justify-center">
            <Image alt="Viksit India" src="/Role1.jpeg" height={150} width={300} className="object-contain" />
          </div>
        </Card>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={6} lg={6}>
      <Link href='/Shiksha_Mahakumbh.pdf'>
        <Card title="Shiksha Mahakumbh" bordered={false}>
          <div className="flex justify-center">
            <Image alt="Viksit Bharat" src="/shiksha.jpeg" height={150} width={300} className="object-contain" />
          </div>
        </Card>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={6} lg={6}>
      <Link href='/SchoolEducation.pdf'>
        <Card title="Recent Advances in School education" bordered={false}>
          <div className="flex justify-center">
            <Image alt="Viksit Bharat" src="/recent_advances.jpeg" height={150} width={300} className="object-contain" />
          </div>
        </Card>
        </Link>
      </Col>
    </Row>
  </div>
);

export default BooksCard;
