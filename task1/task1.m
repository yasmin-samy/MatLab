

x=[20,30,30,20,20]
y=[45,45,15,15,45]
%fill(x,y,'b');
plot(x,y)
fill(x,y,'k')
hold on
x=[24,26,26,24,24]
y=[15,15,5,5,15]
plot(x,y)
fill(x,y,[0.12 0.2 0.13])
xlim([0 50]);
ylim([0 50]);

hold on
r=4;
a=0:.1:2*pi;
%plot(r*sin(a)+25,r*cos(a)+40)
%cplot(2,5,10)
fill(r*sin(a)+25,r*cos(a)+40,[0.6350 0.0780 0.70]);
fill(r*sin(a)+25,r*cos(a)+31,[0.9290 0.6940 0.1250]);
fill(r*sin(a)+25,r*cos(a)+21,[0 0.32 0.22]);
for c=1:10
hold on
r=4;
fill(r*sin(a)+25,r*cos(a)+40,'r');
pause(1)
fill(r*sin(a)+25,r*cos(a)+40,[0.6350 0.0780 0.1840]);

hold on
r=4;
fill(r*sin(a)+25,r*cos(a)+31,'y');
pause(1)
fill(r*sin(a)+25,r*cos(a)+31,[0.9290 0.6940 0.1250]);

hold on
r=4;
fill(r*sin(a)+25,r*cos(a)+21,'g');
pause(1)
fill(r*sin(a)+25,r*cos(a)+21,[0 0.32 0.22]);
end
