import React, { useState, useEffect } from 'react';

// ---------------------------------------------------------
// 아이콘 컴포넌트
// ---------------------------------------------------------
const IconTrophy = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
);
const IconGift = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.9 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" /></svg>
);
const IconStar = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);
const IconSparkles = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M9 5H5" /><path d="M19 19v2" /><path d="M21 20h-2" /></svg>
);
const IconFrown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
);
const IconRefresh = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
);
const IconSettings = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);

const BbokkiGame = () => {
  const TOTAL_SLOTS = 50; 
  
  // 기본 설정값 (localStorage가 비어있을 때 사용)
  const DEFAULT_PRIZES = [
    { id: 1, rank: 1, name: "황금 열쇠 (순금 1돈)", weight: 1, total: 1, current: 1, color: "text-yellow-500", iconType: 'trophy' },
    { id: 2, rank: 2, name: "최신형 무선 헤드셋", weight: 5, total: 3, current: 3, color: "text-blue-500", iconType: 'gift' },
    { id: 3, rank: 3, name: "편의점 상품권 1만원", weight: 15, total: 10, current: 10, color: "text-green-500", iconType: 'star' },
    { id: 4, rank: 4, name: "추억의 불량식품 세트", weight: 30, total: 20, current: 20, color: "text-orange-500", iconType: 'sparkle' },
    { id: 5, rank: 5, name: "다음 기회에... (꽝)", weight: 49, total: 999, current: 999, color: "text-gray-400", iconType: 'frown' },
  ];

  // ---------------------------------------------------------
  // State (Lazy Initialization으로 로컬스토리지 불러오기)
  // ---------------------------------------------------------
  const [prizes, setPrizes] = useState(() => {
    const saved = localStorage.getItem('bbokki_prizes');
    return saved ? JSON.parse(saved) : DEFAULT_PRIZES;
  });

  const [board, setBoard] = useState(() => {
    const saved = localStorage.getItem('bbokki_board');
    if (saved) return JSON.parse(saved);
    
    // 저장된 보드가 없으면 새로 생성
    return Array.from({ length: TOTAL_SLOTS }, (_, i) => ({
      id: i,
      isOpen: false,
      prizeData: null,
      number: i + 1
    }));
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('bbokki_history');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedPrize, setSelectedPrize] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // 수정 중인 설정값 임시 저장용
  const [tempPrizes, setTempPrizes] = useState(JSON.parse(JSON.stringify(prizes)));

  // ---------------------------------------------------------
  // Effect: 데이터 변경 시마다 로컬스토리지 저장
  // ---------------------------------------------------------
  useEffect(() => {
    localStorage.setItem('bbokki_prizes', JSON.stringify(prizes));
    localStorage.setItem('bbokki_board', JSON.stringify(board));
    localStorage.setItem('bbokki_history', JSON.stringify(history));
  }, [prizes, board, history]);


  // ---------------------------------------------------------
  // 로직
  // ---------------------------------------------------------
  const drawPrizeLogic = () => {
    const availablePrizes = prizes.filter(p => p.current > 0);
    const totalWeight = availablePrizes.reduce((acc, p) => acc + p.weight, 0);
    let randomValue = Math.random() * totalWeight;
    
    let winningPrize = null;
    for (const prize of availablePrizes) {
      randomValue -= prize.weight;
      if (randomValue <= 0) {
        winningPrize = prize;
        break;
      }
    }

    if (!winningPrize) winningPrize = prizes.find(p => p.rank === 5);
    return winningPrize;
  };

  const handleSlotClick = (index) => {
    if (board[index].isOpen) return;

    const result = drawPrizeLogic();

    const newBoard = [...board];
    newBoard[index] = { ...newBoard[index], isOpen: true, prizeData: result };
    setBoard(newBoard);

    const newPrizes = prizes.map(p => 
      p.id === result.id ? { ...p, current: p.current - 1 } : p
    );
    setPrizes(newPrizes);

    setTimeout(() => {
      setSelectedPrize(result);
      setIsModalOpen(true);
      setHistory(prev => [result, ...prev]);
    }, 400);
  };

  const resetGame = () => {
    if(!window.confirm("정말 모든 데이터를 초기화하시겠습니까? 기록과 판이 모두 사라집니다.")) return;
    
    // 현재 설정된 total 값을 기준으로 current 리셋
    const resetPrizes = prizes.map(p => ({
      ...p,
      current: p.total
    }));
    
    setPrizes(resetPrizes);
    setHistory([]);
    setBoard(Array.from({ length: TOTAL_SLOTS }, (_, i) => ({
      id: i,
      isOpen: false,
      prizeData: null,
      number: i + 1
    })));
  };

  // ---------------------------------------------------------
  // 설정 관련 함수
  // ---------------------------------------------------------
  const openSettings = () => {
    setTempPrizes(JSON.parse(JSON.stringify(prizes))); // 현재 상태 복사
    setIsSettingsOpen(true);
  };

  const handleSettingChange = (id, field, value) => {
    setTempPrizes(prev => prev.map(p => 
      p.id === id ? { ...p, [field]: field === 'total' || field === 'weight' ? Number(value) : value } : p
    ));
  };

  const saveSettings = () => {
    // 설정 저장 시에는 게임을 리셋하는 것이 안전함 (재고 오류 방지)
    if(window.confirm("설정을 저장하면 게임판이 초기화됩니다. 진행하시겠습니까?")) {
      // 변경된 Total 값을 Current에도 적용하여 리셋
      const newPrizes = tempPrizes.map(p => ({
        ...p,
        current: p.total
      }));
      
      setPrizes(newPrizes);
      setHistory([]);
      setBoard(Array.from({ length: TOTAL_SLOTS }, (_, i) => ({
        id: i,
        isOpen: false,
        prizeData: null,
        number: i + 1
      })));
      setIsSettingsOpen(false);
    }
  };

  // 아이콘 렌더링 헬퍼
  const renderIcon = (type, className) => {
    switch(type) {
      case 'trophy': return <IconTrophy className={className} />;
      case 'gift': return <IconGift className={className} />;
      case 'star': return <IconStar className={className} />;
      case 'sparkle': return <IconSparkles className={className} />;
      default: return <IconFrown className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-8 px-4 font-sans select-none">
      
      {/* 헤더 */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <IconSparkles className="text-yellow-500" /> 대박 기원 뽑기판
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            * 이 페이지를 닫아도 데이터는 유지됩니다.
          </p>
        </div>
        <div className="flex gap-2">
           <button 
            onClick={openSettings}
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors"
            title="설정"
          >
            <IconSettings className="w-5 h-5" />
          </button>
          <button 
            onClick={resetGame}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors font-medium text-sm"
          >
            <IconRefresh className="w-4 h-4" /> 초기화
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 왼쪽: 뽑기판 */}
        <div className="lg:col-span-2">
          <div className="bg-yellow-800 p-4 rounded-xl shadow-xl relative">
            <div className="absolute inset-0 bg-yellow-900 opacity-10 rounded-xl pointer-events-none"></div>
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-2 relative z-10">
              {board.map((slot, index) => (
                <button
                  key={slot.id}
                  onClick={() => handleSlotClick(index)}
                  disabled={slot.isOpen}
                  className={`
                    aspect-square relative rounded shadow-sm flex items-center justify-center text-xs font-bold transition-all duration-300
                    ${slot.isOpen 
                      ? 'bg-white border-2 border-slate-200 cursor-default' 
                      : 'bg-yellow-200 hover:bg-yellow-100 border-b-4 border-r-4 border-yellow-400 hover:scale-105 active:scale-95 cursor-pointer text-yellow-800'
                    }
                  `}
                >
                  {slot.isOpen ? (
                    <span className={`text-center leading-tight ${slot.prizeData?.rank === 5 ? 'text-slate-400' : 'text-red-500'}`}>
                      {slot.prizeData?.rank === 5 ? '꽝' : `${slot.prizeData?.rank}등`}
                    </span>
                  ) : (
                    <span className="opacity-50">{slot.number}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 오른쪽: 현황판 */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <h2 className="font-bold text-lg mb-4 text-slate-800 border-b pb-2">남은 상품 현황</h2>
            <ul className="space-y-3">
              {prizes.map((prize) => (
                <li key={prize.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold w-8 ${prize.color}`}>{prize.rank === 5 ? '꽝' : `${prize.rank}등`}</span>
                    <span className="text-slate-600 truncate max-w-[120px]">{prize.name}</span>
                  </div>
                  <span className={`font-mono font-medium px-2 py-0.5 rounded ${prize.current === 0 ? 'bg-red-100 text-red-500' : 'bg-slate-100 text-slate-600'}`}>
                    {prize.rank === 5 ? '∞' : `${prize.current}개`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex-1">
            <h2 className="font-bold text-lg mb-4 text-slate-800 border-b pb-2">나의 당첨 기록</h2>
            <div className="h-48 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {history.length === 0 ? (
                <p className="text-slate-400 text-center text-sm py-4">기록이 없습니다.</p>
              ) : (
                history.map((record, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm p-2 bg-slate-50 rounded">
                    <span className={record.rank <= 3 ? "font-bold text-red-500" : "text-slate-500"}>
                      {record.rank === 5 ? '꽝' : `${record.rank}등`}
                    </span>
                    <span className="text-xs text-slate-400">{record.name}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 결과 모달 */}
      {isModalOpen && selectedPrize && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform scale-100 animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="mb-6 flex justify-center">
              {renderIcon(selectedPrize.iconType, `w-16 h-16 ${selectedPrize.color}`)}
            </div>
            
            <h2 className={`text-3xl font-black mb-2 ${selectedPrize.rank === 5 ? 'text-slate-600' : 'text-red-500'}`}>
              {selectedPrize.rank === 5 ? '아쉽네요!' : `축하합니다!`}
            </h2>
            
            <p className="text-xl font-bold text-slate-800 mb-2">
              {selectedPrize.rank === 5 ? '꽝' : `${selectedPrize.rank}등 당첨`}
            </p>
            
            <p className="text-slate-500 mb-8 break-keep">
              {selectedPrize.name}
            </p>

            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* 설정 모달 */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full transform scale-100 animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <IconSettings className="w-6 h-6" /> 상품 및 확률 설정
            </h2>
            
            <div className="overflow-y-auto flex-1 pr-2">
              <div className="space-y-4">
                {tempPrizes.map((prize) => (
                  <div key={prize.id} className="p-3 border rounded-lg bg-slate-50">
                    <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                       <span className={prize.color}>{prize.rank === 5 ? '꽝' : `${prize.rank}등`}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">상품명</label>
                        <input 
                          type="text" 
                          value={prize.name} 
                          onChange={(e) => handleSettingChange(prize.id, 'name', e.target.value)}
                          className="w-full border rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <label className="block text-xs text-slate-500 mb-1">전체 수량</label>
                          <input 
                            type="number" 
                            disabled={prize.rank === 5} // 꽝은 무한대라 수정 불가
                            value={prize.total} 
                            onChange={(e) => handleSettingChange(prize.id, 'total', e.target.value)}
                            className="w-full border rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-200"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-xs text-slate-500 mb-1">당첨 가중치</label>
                          <input 
                            type="number" 
                            value={prize.weight} 
                            onChange={(e) => handleSettingChange(prize.id, 'weight', e.target.value)}
                            className="w-full border rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4 mt-4 border-t flex gap-3">
              <button 
                onClick={() => setIsSettingsOpen(false)}
                className="flex-1 px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300"
              >
                취소
              </button>
              <button 
                onClick={saveSettings}
                className="flex-1 px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700"
              >
                저장 후 리셋
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BbokkiGame;
