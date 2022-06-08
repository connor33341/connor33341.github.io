local StartTime = os.clock()
local A,B = true,false
for c = 1,4000,1 do
  A,B = B,A
end
local EndTime = os.clock()
local TotalDelay = EndTime-StartTime
