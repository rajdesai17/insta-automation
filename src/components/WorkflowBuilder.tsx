import { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, Switch } from '@mui/material';
import { FiHome, FiMessageCircle, FiSettings, FiHeart, FiSend, FiBookmark, FiMoreHorizontal, FiChevronLeft, FiPhone, FiVideo, FiBattery, FiWifi, FiMenu } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { FaRegHeart, FaRegPaperPlane, FaRegUserCircle, FaPlusCircle, FaCamera, FaRegImage, FaRegSmile } from 'react-icons/fa';

const posts = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Post 1',
    desc: 'WhatsApp hits 3 Billion Users!'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Post 2',
    desc: 'Unlock Instagram hidden goldmine with AI!'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Post 3',
    desc: 'Others are not working'
  },
];

const WorkflowBuilder = () => {
  const [selectedPost, setSelectedPost] = useState(posts[0].id);
  const [commentType, setCommentType] = useState('specific');
  const [keywords, setKeywords] = useState('');
  const [dmEnabled, setDmEnabled] = useState(true);
  const [dmOpening, setDmOpening] = useState('Hey there! I’m so happy you’re here, thanks so much for your interest 😊\n\nClick below and I’ll send you the link in just a sec ✨');
  const [dmLink, setDmLink] = useState('Send me the link');
  const [dmMessage, setDmMessage] = useState('Hey');
  const [step, setStep] = useState(0);

  // Instagram-style post preview
  const renderPostPreview = () => {
    const post = posts.find(p => p.id === selectedPost);
    return (
      <div className="w-full h-full flex flex-col bg-black rounded-[32px] overflow-hidden shadow-xl border border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#222]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center"><AiOutlineUser color="#fff" size={24} /></div>
            <span className="text-white font-semibold text-sm">botspacehq</span>
            <span className="text-gray-400 text-xs">• 1h</span>
          </div>
          <FiMoreHorizontal color="#fff" size={24} />
        </div>
        {/* Image */}
        <div className="w-full aspect-square bg-gray-900 flex items-center justify-center">
          <img src={post?.img} alt="Preview" className="object-cover w-full h-full" />
        </div>
        {/* Actions */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#222]">
          <div className="flex items-center gap-4">
            <span className="cursor-pointer"><FiHeart color="#fff" size={24} /></span>
            <BsChat color="#fff" size={24} />
            <FiSend color="#fff" size={24} />
          </div>
          <FiBookmark color="#fff" size={24} />
        </div>
        {/* Likes and Caption */}
        <div className="px-4 py-2 flex flex-col gap-1">
          <span className="text-white text-sm font-semibold">18 likes</span>
          <span className="text-white text-sm"><span className="font-semibold">botspacehq</span> {post?.desc}</span>
        </div>
      </div>
    );
  };

  // Instagram-style DM preview
  const renderDMPreview = () => (
    <div className="w-full h-full flex flex-col bg-black rounded-[32px] overflow-hidden shadow-xl border border-gray-800 relative">
      {/* DM messages */}
      <div className="flex-1 flex flex-col gap-2 px-4 py-4 overflow-y-auto">
        {/* Received message */}
        <div className="flex items-start gap-2">
          <FaRegUserCircle color="#fff" size={28} />
          <div className="bg-[#18191a] rounded-2xl px-3 py-2 text-white text-sm max-w-[75%]">
            <div>Hey there! I’m so happy you’re here, thanks so much for your interest <span role='img' aria-label='smile'>😊</span></div>
            <div className="mt-1">Click below and I’ll send you the link in just a sec <span role='img' aria-label='sparkle'>✨</span></div>
            <button className="block mt-2 bg-[#2323fa] text-white text-xs rounded-lg px-3 py-1">Send me the link</button>
          </div>
        </div>
        {/* Sent message */}
        <div className="flex justify-end">
          <div className="bg-[#7b61ff] rounded-2xl px-3 py-2 text-white text-sm max-w-[60%]">Send me the link</div>
        </div>
        {/* Received message (dynamic) */}
        <div className="flex items-start gap-2">
          <FaRegUserCircle color="#fff" size={28} />
          <div className="bg-[#18191a] rounded-2xl px-3 py-2 text-white text-sm max-w-[75%]">{dmMessage}</div>
        </div>
      </div>
      {/* Input row - Instagram style */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#232323] rounded-full mx-4 mb-4 border border-[#232323]">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <FaCamera color="#fff" size={20} />
        </div>
        <input
          className="flex-1 bg-transparent outline-none border-none text-[15px] text-gray-300 placeholder-gray-400 px-2"
          placeholder="Message..."
          disabled
        />
        <span className="mx-1"><FaRegImage color="#d1d5db" size={20} /></span>
        <span className="mx-1"><FaRegSmile color="#d1d5db" size={20} /></span>
        <span className="mx-1"><FaPlusCircle color="#d1d5db" size={20} /></span>
      </div>
    </div>
  );

  // Main phone preview switch (now based on workflow step)
  const renderPreview = () => {
    if (step === 1) {
      // Comments overlay modal
      return (
        <div className="relative w-full h-full">
          {/* Post preview as background */}
          {renderPostPreview()}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          {/* Comments popup */}
          <div className="absolute left-0 bottom-0 w-full h-[70%] bg-[#181818] rounded-t-2xl shadow-2xl z-20 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#222]">
              <span className="text-white font-semibold text-base mx-auto">Comments</span>
              <span style={{ position: 'absolute', right: 20 }}><FaRegPaperPlane color="#fff" size={20} /></span>
            </div>
            {/* Comment row */}
            <div className="flex-1 flex flex-col gap-2 px-5 py-4 overflow-y-auto">
              <div className="flex items-start gap-3">
                <FaRegUserCircle color="#fff" size={32} />
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-sm">Username</span>
                    <span className="text-neutral-400 text-xs font-normal">Now</span>
                  </div>
                  <span className="text-white font-normal text-sm">{keywords || 'Price'}</span>
                  <span className="text-neutral-400 text-xs cursor-pointer font-normal mt-1">Reply</span>
                </div>
                <span style={{ marginTop: 4 }}><FaRegHeart color="#fff" size={18} /></span>
              </div>
            </div>
            {/* Input row */}
            <div className="px-5 pb-5">
              <div className="flex items-center bg-[#181818] rounded-full px-3 py-2">
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center mr-2">
                  <FaPlusCircle color="#fff" size={18} />
                </div>
                <input
                  className="flex-1 bg-transparent border-none outline-none text-neutral-400 text-sm placeholder:text-neutral-400"
                  placeholder="Add a comment for username..."
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (step === 0) return renderPostPreview();
    return renderDMPreview();
  };

  return (
    <div className="flex h-screen bg-gray-50" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
      {/* Sidebar */}
      <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-lg">m</div>
        <FiHome color="#6b7280" size={32} />
        <FiMessageCircle color="#6b7280" size={32} />
        <FiSettings color="#6b7280" size={32} />
      </div>
      <div className="flex-1 p-8 flex flex-row justify-between relative">
        <div className="w-[400px] mx-auto flex flex-col gap-6">
          {/* Step 1: Post selection */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="font-semibold text-lg mb-3 text-[#101828]">When someone comments on</div>
            <RadioGroup value={commentType} onChange={e => setCommentType(e.target.value)}>
              <FormControlLabel value="specific" control={<Radio sx={{ color: '#667085', '&.Mui-checked': { color: '#2563eb' } }} />} label={<span className="text-[#101828] text-base">a specific post or reel</span>} />
              <div className="flex gap-2 mb-2 mt-2">
                {posts.map(post => (
                  <div key={post.id} className={`w-20 h-20 rounded-lg overflow-hidden border cursor-pointer transition-all ${selectedPost === post.id ? 'border-blue-500 ring-2 ring-blue-100 bg-blue-50' : 'border-gray-200 hover:border-blue-300'} flex items-center justify-center`} onClick={() => setSelectedPost(post.id)}>
                    <img src={post.img} alt={post.title} className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              <button className="text-blue-600 text-sm font-medium mb-2 ml-1 hover:underline" type="button">Show All</button>
              <FormControlLabel value="any" control={<Radio sx={{ color: '#667085', '&.Mui-checked': { color: '#2563eb' } }} />} label={<span className="flex items-center text-[#101828] text-base">any post or reel <span className="ml-2 bg-blue-50 text-blue-600 text-xs font-semibold rounded px-2 py-0.5">PRO</span></span>} />
              <FormControlLabel value="next" control={<Radio sx={{ color: '#667085', '&.Mui-checked': { color: '#2563eb' } }} />} label={<span className="flex items-center text-[#101828] text-base">next post or reel <span className="ml-2 bg-blue-50 text-blue-600 text-xs font-semibold rounded px-2 py-0.5">PRO</span></span>} />
            </RadioGroup>
            {step === 0 && (
              <button className="mt-6 w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold text-base shadow-sm hover:bg-blue-700 transition" onClick={() => setStep(1)}>Next</button>
            )}
          </div>

          {/* Step 2: Comment keyword */}
          {step >= 1 && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
              <div className="text-[17px] font-semibold mb-3 text-[#101828]">And this comment has</div>
              <RadioGroup value={commentType} onChange={e => setCommentType(e.target.value)}>
                <div className={`rounded-xl p-4 mb-2 ${commentType === 'specific' ? 'bg-blue-50 border border-blue-100' : ''}`}> 
                  <FormControlLabel value="specific" control={<Radio sx={{ color: '#2563eb', '&.Mui-checked': { color: '#2563eb' }, p: 0, mr: 1 }} />} label={<span className="text-[15px] font-medium text-[#101828]">a specific word or words</span>} />
                  {commentType === 'specific' && (
                    <div className="mt-3">
                      <input
                        className="w-full rounded-lg border border-gray-300 bg-white text-[15px] font-normal text-[#101828] px-3 py-2 focus:border-blue-500 outline-none mb-2"
                        value={keywords}
                        onChange={e => setKeywords(e.target.value)}
                        placeholder="Price"
                      />
                      <div className="text-[#667085] text-[13px] mb-1 font-normal">Use commas to separate words</div>
                      <div className="text-[#667085] text-[13px] flex items-center gap-1 font-normal">For example: <span className="flex gap-1">{['Price', 'Link', 'Shop'].map(word => (
                        <button
                          key={word}
                          type="button"
                          className="bg-blue-50 border border-blue-200 text-blue-700 rounded-full px-2 py-0.5 text-[13px] font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                          onClick={() => setKeywords(word)}
                        >
                          {word}
                        </button>
                      ))}</span></div>
                    </div>
                  )}
                </div>
                <div className={`rounded-xl p-4 ${commentType === 'any' ? 'bg-blue-50 border border-blue-100' : ''}`}> 
                  <FormControlLabel value="any" control={<Radio sx={{ color: '#2563eb', '&.Mui-checked': { color: '#2563eb' }, p: 0, mr: 1 }} />} label={<span className="text-[15px] font-medium text-[#101828]">any word</span>} />
                </div>
              </RadioGroup>
              {step === 1 && (
                <button className="mt-2 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-[15px] font-medium text-[#101828] shadow-sm hover:bg-gray-50 transition" onClick={() => setStep(2)}>Next</button>
              )}
            </div>
          )}

          {/* Step 3: DM message */}
          {step >= 2 && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-6">
              <div className="font-semibold text-lg mb-3 text-[#101828]">They will get</div>
              {/* Opening DM section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#101828] text-base font-medium">an opening DM</span>
                  <Switch checked={dmEnabled} onChange={e => setDmEnabled(e.target.checked)} sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': { color: '#22C55E' },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#22C55E' },
                  }} />
                </div>
                {dmEnabled && (
                  <div className="flex flex-col gap-2">
                    <textarea
                      className="rounded-lg bg-[#F2F4F7] border border-gray-200 text-[#101828] text-base px-3 py-2 min-h-[64px] resize-none focus:border-blue-500 outline-none"
                      value={dmOpening}
                      onChange={e => setDmOpening(e.target.value)}
                    />
                    <input
                      className="rounded-lg bg-[#F2F4F7] border border-gray-200 text-[#101828] text-base px-3 py-2 focus:border-blue-500 outline-none"
                      value={dmLink}
                      onChange={e => setDmLink(e.target.value)}
                      placeholder="Send me the link"
                    />
                    <a href="#" className="text-blue-600 text-sm font-medium flex items-center gap-1 mt-1 hover:underline">
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8 1.333A6.667 6.667 0 1 1 1.333 8 6.674 6.674 0 0 1 8 1.333Zm0 2.667a.667.667 0 0 0-.667.667v2a.667.667 0 0 0 1.334 0v-2A.667.667 0 0 0 8 4Zm0 5.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334Z" fill="#2563eb"/></svg>
                      Why does an Opening DM matter?
                    </a>
                  </div>
                )}
              </div>
              {/* DM with the link section */}
              <div className="mb-2">
                <div className="text-[#101828] text-base font-medium mb-2">a DM with the link</div>
                <textarea
                  className="rounded-lg border border-red-300 bg-[#FEF3F2] text-[#101828] text-base px-3 py-2 min-h-[64px] resize-none focus:border-red-500 outline-none w-full"
                  value={dmMessage}
                  onChange={e => setDmMessage(e.target.value)}
                  placeholder="Create the DM you’d like to send"
                />
                <div className="text-[#F04438] text-xs mt-1 mb-2">Create the DM you’d like to send</div>
                <button type="button" className="w-full flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-[#F2F4F7] text-[#344054] font-semibold py-2 text-base mt-1 hover:bg-gray-100 transition">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 4.167v11.666M4.167 10h11.666" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Add A Link
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Phone Preview */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex flex-col items-center" style={{ width: 340, height: 700 }}>
            {/* Phone frame */}
            <div className="absolute inset-0 rounded-[40px] bg-black shadow-2xl border-4 border-gray-200 z-0" />
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-28 h-5 bg-gray-900 rounded-b-2xl mt-2" />
            {/* Status bar */}
            <div className="absolute top-4 left-0 w-full flex justify-between items-center px-6 z-10 text-xs text-white opacity-80">
              <span>1:37</span>
              <div className="flex items-center gap-1">
                <FiWifi size={16} />
                <FiBattery size={16} />
              </div>
            </div>
            {/* Phone content */}
            <div className="relative z-10 flex flex-col w-[320px] h-[640px] rounded-[32px] overflow-hidden bg-black mt-8">
              {/* Header for each mode (based on step) */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#222] bg-black/80">
                {step === 0 && (
                  <>
                    <FiChevronLeft color="#fff" size={22} />
                    <span className="text-white font-semibold text-base">Posts</span>
                    <FiMenu color="#fff" size={22} />
                  </>
                )}
                {step === 1 && (
                  <>
                    <FiChevronLeft color="#fff" size={22} />
                    <span className="text-white font-semibold text-base">Comments</span>
                    <span className="w-6" />
                  </>
                )}
                {step === 2 && (
                  <>
                    <FiChevronLeft color="#fff" size={22} />
                    <span className="text-white font-semibold text-base">botspacehq</span>
                    <div className="flex items-center gap-2">
                      <FiPhone color="#fff" size={18} />
                      <FiVideo color="#fff" size={18} />
                      <FiMenu color="#fff" size={18} />
                    </div>
                  </>
                )}
              </div>
              {/* Main preview content */}
              <div className="flex-1 flex flex-col justify-start items-center overflow-y-auto">
                {renderPreview()}
              </div>
              {/* Home indicator */}
              <div className="flex justify-center items-center py-2">
                <div className="w-16 h-1.5 bg-gray-700 rounded-full" />
              </div>
              {/* Fixed bottom tab bar (hide when comments overlay is open or in DM view) */}
              {step !== 1 && step !== 2 && (
                <div className="absolute left-0 bottom-10 w-full flex items-center justify-around px-2 py-2 border-t border-[#222] bg-black/80">
                  <FiHome color="#fff" size={24} />
                  <FiMessageCircle color="#fff" size={24} />
                  <FiHeart color="#fff" size={24} />
                  <AiOutlineUser color="#fff" size={24} />
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="absolute top-8 right-8 bg-white border border-gray-200 rounded px-4 py-2 shadow text-gray-800 font-semibold hover:bg-gray-100 transition">Go Live</button>
      </div>
    </div>
  );
};

export default WorkflowBuilder; 