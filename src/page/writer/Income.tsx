    import React from 'react';
    import './Income.css'; 
    import TOP from '../../components/0'; 
    import CategoryNavWriter from '../../components/CatogoryNavWriter';
    // import { arrowleft}
    import { DollarCircleOutlined } from '@ant-design/icons';


    interface IncomeData {
        income: number;
        date: string; 
    }

    const Income: React.FC = () => {
        const incomes: IncomeData[] = [
            { income: 5555, date: '2023-12-25' },
            // ... more income data
        ];

        return (
            <>
                <TOP />
                <CategoryNavWriter />
                <div className='lb'>
                    <label className='work-text-income'>รายได้ของคุณ</label>
                    {incomes.map((IncomeData) => (
                    <div className='work-text-incomeUser' style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="..\src\assets\coin.png" alt="รายได้" style={{ marginRight: '10px' }} />
                            {IncomeData.income}&nbsp; <span style={{ color: '#FFB800' }}>เหรียญ</span>
                    </div>
                ))}
                <a href='/Withdraw' style={{ textDecoration: 'none' }}> {/* เพิ่ม textDecoration: 'none' ที่นี่ */}
                    <button className="work-button-withdraw">
                        <DollarCircleOutlined style={{ fontSize: '60px' }} /> WITHDRAW
                    </button>
                </a>
            </div>
            </>
        );
    };

    export default Income;