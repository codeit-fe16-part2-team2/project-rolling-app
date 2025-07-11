// src/components/EmojiGroup/ToggleEmoji.jsx
import React from 'react';
import EmojiBadge from './EmojiBadge';
import Style from './ToggleEmoji.module.scss';
import DropdownIcon from '@/components/Dropdown/DropdownIcon';

/**
 * ToggleEmoji 컴포넌트
 *
 * @param {object} props
 * @param {Array<{ id: number, emoji: string, count: number }>} props.emojis
 *        - 백엔드에서 count 내림차순으로 이미 정렬된 최대 8개의 이모지 리스트
 */
export default function ToggleEmoji({ emojis, open = false, addedEmoji }) {
  // 1) 상위 3개만 보여주기(겹치지 않음)
  const visibleCount = Math.min(emojis.length, 3);
  const visibleEmojis = emojis.slice(0, visibleCount);

  return (
    <div className={Style['toggle-emoji']}>
      {visibleEmojis.map((item) => (
        <EmojiBadge
          key={item.id}
          emoji={item.emoji}
          count={item.count}
          size='small'
          className={Style['toggle-emoji__badge']}
          addedEmoji={addedEmoji}
        />
      ))}

      {/* 드롭다운 화살표 아이콘 (SVG) */}
      <DropdownIcon
        className={`
              ${Style['toggle-emoji__button-icon']}
              ${open ? Style['toggle-emoji__button-icon--open'] : ''}
            `}
      />
    </div>
  );
}
